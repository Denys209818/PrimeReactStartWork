import { useEffect, useState } from "react";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import axiosService from "../../../services/axiosService";


const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosService.post('api/product/get')
        .then(result => {
            console.log(result.data.list);
            setProducts(result.data.list);
        }, error => {
            console.log(error);
        });
    }, []);

    const imageBodyTemplate = (rowData) => {
        return <img src={`images/${rowData.image}`} style={{width:'80px', height: '80px'}} alt={rowData.image} className="product-image" />;
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('uk-UA', { style: 'currency', currency: 'UAH' });
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }


    return (<div className="container mt-4">
        <div className="row">
            <div className="offset-1 col-md-10">
                <DataTable value={products} emptyMessage="Немає результатів">
                    <Column field="code" sortable header="Номер"></Column>
                    <Column field="name" sortable header="Назва"></Column>
                    <Column field="category" sortable header="Категорія"></Column>
                    <Column field="price" sortable header="Ціна" body={priceBodyTemplate}></Column>
                    <Column field="image" header="Фотографія" body={imageBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    </div>
    );

}

export default Product;