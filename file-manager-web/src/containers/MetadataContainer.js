import React from 'react';

import { Metadata } from "../components/Metadata/index";
import { AuthService } from "../services/AuthService";
import { MetadataService } from "../services/MetadataService";
import { createMetadataRoute, homeRoute, updateMetadataRoute } from "../env";
import {toYYYYMMDD} from "../formatters/date-formatter";
import {bytesToMegaBytes} from "../formatters/file-formatter";
import {DownloadService} from "../services/DownloadService";
import { toast } from "react-toastify";
import  fileDownload  from "react-file-download"

export class MetadataContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            originalMetadata:[],
            filteredMetadata:[],
            filterValue:''
        };
    }

    componentWillMount(){
        AuthService.checkAuthentication();
    }

    componentDidMount(){
        this.getAllMetadata();
    }

    onCancel = ()=> {
        this.props.history.push(homeRoute);
    }

    onCreate = ()=> {
        this.props.history.push(createMetadataRoute);
    }

    onUpdate = (event)=> {
        this.props.history.push(updateMetadataRoute.replace(':id', event.currentTarget.getAttribute('data-item')));
    }

    onDownload = (event)=>{
        event.preventDefault();
        event.stopPropagation();

        const fileName = event.currentTarget.getAttribute('filename');

        DownloadService.download(event.currentTarget.getAttribute('uniqueid'))
            .then((response)=>{
                fileDownload(response.data, fileName);
                toast.success('File downloaded.');
            })
            .catch(()=>{
                toast.error('Error on download file.');
            });
    }

    getAllMetadata = ()=> {
        MetadataService.getAllMetadata()
            .then((response)=>{
                const formattedMetadata = this.formatMetadata(response.data);
                this.setState({originalMetadata: formattedMetadata, filteredMetadata: formattedMetadata});
            })
            .catch(error=>toast.error('Error on get metadata.'));
    }

    formatMetadata = (metadataList)=>{
        return metadataList.map((metadata)=>{
            metadata.expiryFormatted = toYYYYMMDD(metadata.expiry);
            metadata.sizeFormatted = bytesToMegaBytes(metadata.size);
            return metadata;
        });
    }

    onFilter = (event) => {
        const filterValue = event.target.value;

        const metadataToFilter = this.state.originalMetadata.slice();

        const filteredMetadata = metadataToFilter.filter((metadata)=>{
            return metadata.originalName.indexOf(filterValue) !== -1;
        });

        this.setState({filteredMetadata, filterValue});
    }

    onClearFilter = () => {
        this.setState({filteredMetadata:this.state.originalMetadata, filterValue:''});
    }

    renderTableRows = ()=> {
        return this.state.filteredMetadata.map((metadata, index)=> {
            return (
                <tr className="pointer" key={index} data-item={metadata.uniqueId} onClick={this.onUpdate}>
                    <td>
                        #
                    </td>
                    <td>
                        <a>{metadata.originalName}</a>
                    </td>
                    <td>
                        <p>{metadata.contentType}</p>
                    </td>
                   <td>
                        <p>{metadata.sizeFormatted} MB</p>
                    </td>
                    <td>
                        <p>{metadata.expiryFormatted}</p>
                    </td>
                    <td onClick={this.onDownload} uniqueid={metadata.uniqueId} filename={metadata.originalName}>
                        <i className="fa fa-download pull-right btn-tbl"></i>
                    </td>
                </tr>
            );
        });
    }

    render(){
        return <Metadata onCancel={this.onCancel}
                         onUpdate={this.onUpdate}
                         onCreate={this.onCreate}
                         onFilter={this.onFilter}
                         onClearFilter={this.onClearFilter}
                         rows={this.renderTableRows()}
                         state={this.state}
        />
    }
}