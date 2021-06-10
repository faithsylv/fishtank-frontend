import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyPDF from './Elasmobranch_Study.numbers';

export default class FileUpload extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <h3>Upload Spreadsheet</h3>
                        <div className="form-group">
                          <a href={MyPDF} download='Elasmobranch_Study.numbers'>Download Here</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
