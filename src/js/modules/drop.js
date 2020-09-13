const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    ['dragenter', 'gragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        })
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }

    function unHighlight(item) {
        item.closest('.file_upload').style.border = "none";
        item.closest('.file_upload').style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        })
    });
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        })
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr =  input.files[0].name.split('.');
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0,6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        })
    })


};

export default drop;