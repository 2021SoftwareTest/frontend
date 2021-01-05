import React, {Component} from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CusCKEditor extends Component {
    componentDidMount() {
        this.init();
    }

    init = () => {
        ClassicEditor
            .create(document.querySelector('#editor'))
            .then(editor => {
            })
            .catch(error => {
            });
    }


    render() {
        return (
            <textarea name="content" id="editor">

      </textarea>
        )
    }
}

export default CusCKEditor
