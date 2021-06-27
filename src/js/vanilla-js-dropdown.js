import utils from "./utils";
const {
  debug,
  debugErr,
} = utils({from: "dropdown"});

export default CustomSelect

function CustomSelect(options) {
    var elem =
        typeof options.elem === 'string' ? document.getElementById(options.elem) : options.elem,
      mainClass = 'js-Dropdown',
      titleClass = 'js-Dropdown-title',
      listClass = 'js-Dropdown-list',
      optgroupClass = 'js-Dropdown-optgroup',
      selectedClass = 'is-selected',
      openClass = 'is-open',
      selectOpgroups = elem.getElementsByTagName('optgroup'),
      selectOptions = elem.options,
      optionsLength = selectOptions.length,
      index = 0;
    
    const { onChange, onOpen, onClose, onFinish } = options;

    // creating the pseudo-select container
    var selectContainer = document.createElement('div');
  
    selectContainer.className = mainClass;
  
    if (elem.id) {
      selectContainer.id = 'custom-' + elem.id;
    }
  
    // creating the always visible main button
    var button = document.createElement('button');
  
    button.className = titleClass;
    if (selectOptions[0]) {
      button.textContent = selectOptions[0].textContent;
    }
  
    // creating the UL
    var ul = document.createElement('ul');
    ul.className = listClass;
  
    // dealing with optgroups
    if (selectOpgroups.length) {
      for (var i = 0; i < selectOpgroups.length; i++) {
        var div = document.createElement('div');
        div.innerText = selectOpgroups[i].label;
        div.classList.add(optgroupClass);
  
        ul.appendChild(div);
        generateOptions(selectOpgroups[i].getElementsByTagName('option'));
      }
    } else {
      generateOptions(selectOptions);
    }
  
    // appending the button and the list
    selectContainer.appendChild(button);
    selectContainer.appendChild(ul);
  
    selectContainer.addEventListener('click', onClick);
  
    // pseudo-select is ready - append it and hide the original
    elem.parentNode.insertBefore(selectContainer, elem);
    elem.style.display = 'none';
  
    /**
     * Generates a list from passed options.
     *
     * @param {object} options - options for the whole select or for an optgroup.
     */
    function generateOptions(options) {
      for (var i = 0; i < options.length; i++) {
        var li = document.createElement('li');
  
        li.innerText = options[i].textContent;
        li.setAttribute('data-value', options[i].value);
        li.setAttribute('data-index', index++);
  
        if (selectOptions[elem.selectedIndex].textContent === options[i].textContent) {
          li.classList.add(selectedClass);
          button.textContent = options[i].textContent;
        }
  
        ul.appendChild(li);
      }
    }

    /**
     * Closes the current select on any click outside of it.
     *
     */
    document.addEventListener('click', function(e) {
      if (!selectContainer.contains(e.target)) close();
    });
  
    /**
     * Handles the clicks on current select.
     *
     * @param {object} e - The item the click occured on.
     */
    function onClick(e) {
      e.preventDefault();
  
      var t = e.target; // || e.srcElement; - uncomment for IE8
  
      if (t.className === titleClass) {
        toggle();
      }
  
      if (t.tagName === 'LI') {
        selectContainer.querySelector('.' + titleClass).innerText = t.innerText;
        elem.options.selectedIndex = t.getAttribute('data-index');
        onChange?.(elem.options.selectedIndex); 
        //trigger 'change' event
        var evt = new CustomEvent('change');
        elem.dispatchEvent(evt);
  
        // highlight the selected
        for (var i = 0; i < optionsLength; i++) {
          ul.querySelectorAll('li')[i].classList.remove(selectedClass);
        }
        t.classList.add(selectedClass);
  
        close();
      }
    }
  
  
    const obj = {
      toggle,
      close,
      open,
      isOpen,
      getSelectedIndex: () => (parseInt(document.querySelector(".js-Dropdown-list li.is-selected")?.dataset?.index)),
      selectByIndex: (index) => (document.querySelector(`.js-Dropdown-list li[data-index="${index}"]`)?.click())
    };

    /**
     * Toggles the open/close state of the select on title's clicks.
     *
     * @public
     */
    function toggle() {
      ul.classList.toggle(openClass);
      if (ul.className.includes(openClass)) {
        onOpen?.();
      }
      else {
        onClose?.({instance: obj});
      }
    }
 
    function isOpen() {
      return (ul.className.includes(openClass));
    }

    /**
     * Opens the select.
     *
     * @public
     */
    function open() {
      ul.classList.add(openClass);
      onOpen?.();
    }
  
    /**
     * Closes the select.
     *
     * @public
     */
    function close() {
      if (ul.className.includes(openClass)) {
        ul.classList.remove(openClass);
        onClose?.({instance: obj});
      }
    }


    onFinish?.(obj);

    return obj;
};
