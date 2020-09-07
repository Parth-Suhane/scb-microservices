import React, { Component } from 'react';

class Products extends Component {


    renderProducts() {

        return this.props.products.map((product, idx) => {
            return (
                <tr key={idx}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )

        })

    }

    render() {



        return (

            <div>

                <div className="card">
                    <div className="card-header bg-primary">Products Component</div>
                    <div className="card-body">
                        <h1>Product Component</h1> <hr />

                        <table border="1">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.renderProducts()}
                            </tbody>


                        </table>

                    </div>

                </div>

            </div>
        );
    }
}

export default Products;