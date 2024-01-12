import React, { useRef, useState } from 'react';
// import { FaCloudArrowUp, FaTimes } from 'react-icons/fa';
// import { FaCloudArrowUp } from 'react-icons/fa';


const Upload = () => {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        updateSelectedFiles(droppedFiles);
    };

    const handleFileInputChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        updateSelectedFiles(selectedFiles);
    };

    const handleCancelFile = (file) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((prevFile) => prevFile !== file));
    };

    const updateSelectedFiles = (newFiles) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    return (
        <section className="media-upload-container">
            <h1 className="media-upload-heading">Upload your Media Files</h1>
            <article
                className="media-upload-wrapper flex-cc"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
                <section className="media-upload-form-container flex-col">
                    <div className="media-upload-icon">
                        {/* <FaCloudArrowUp /> */}
                    </div>
                    <form onSubmit={handleFormSubmit} encType="multipart/form-data" className="media-upload-form flex-col">
                        <span className="drag-drop-text" onClick={handleBrowseClick}>
                            Drag and Drop Media Your Files Here!
                        </span>
                        <label htmlFor="media-files" className="media-upload-files-label" onClick={handleBrowseClick}>
                            or Browse Device
                        </label>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileInputChange}
                            accept="image/*, audio/*, video/*"
                            multiple
                        />
                        <button type="submit" className="media-upload-btn">
                            Upload
                        </button>
                    </form>
                </section>
                {renderFileInfoSection(selectedFiles, handleCancelFile)}
            </article>
        </section>
    );
};

const renderFileInfoSection = (files, onCancelFile) => (
    <section id="selected-media-files" className="selected-media-files scrollable flex-wr">
        <h2 className="selected-media-files-heading flex-cc">File Info and Progress</h2>
        <ul>
            {files.map((file, index) => (
                <li key={index} className="file-info-item">
                    <span>{file.name}</span>
                    <button className="cancel-icon" onClick={() => onCancelFile(file)}>
                        {/* <FaTimes /> */}
                    </button>
                </li>
            ))}
        </ul>
    </section>
);

export default Upload;
