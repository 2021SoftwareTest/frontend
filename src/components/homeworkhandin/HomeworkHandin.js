import 'braft-editor/dist/index.css';
import './HomeworkHandin.css';

import {Button} from "antd";
import BraftEditor from 'braft-editor';
import React from 'react';

export class HomeworkHandin extends React.Component {

    render () {
        const controls = [
            {
                key: 'bold',
                text: <b>加粗</b>
            },
            'italic', 'underline', 'separator', 'link', 'separator', 'media'
        ];

        return (
            <div className="editor-wrapper">
                <BraftEditor
                    controls={controls}
                    contentStyle={{height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}
                />
                <Button className="submit-button">提交</Button>
            </div>
        );

    }

}
