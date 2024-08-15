import React, {useState, useEffect} from 'react';

function ProductsDatabase(){
const [productos,setProductos] = useState([]);
useEffect(()=>{
	fetch('./productos.json')
	.then(response => response.json())
	.then(data=> setProductos(data))
	.catch(error=> console.error('Error fetching data ',error))
},[])
	
	
	
	return (
        
					
					
					
					<div className="card shadow mb-4">
                        <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
											<th>Categories</th>
											<th>Colors</th>
											<th>Stock</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
											<th>Categories</th>
											<th>Colors</th>
											<th>Stock</th>
										</tr>
									</tfoot>
									<tbody>
										{ productos.map((product,index)=>(
											<tr key={index}>
												<td>{product.name} </td>
												<td>{product.description} </td>
												<td>{product.price} </td>
												<td>{product.categorie} </td>
												<td>{product.colors} </td>
												<td>{product.stock} </td>
											</tr>
										))

										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				
                
    );
}

export default ProductsDatabase;