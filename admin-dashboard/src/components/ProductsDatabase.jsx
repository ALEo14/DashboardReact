function ProductsDatabase(){
    
	let productos = [
		{
			name:"Monitor Samsung 24 pulgadas",
			description:"Monitor gamer de 24 pulgadas para jugar ",
			price:475000,
			categorie:"gamer",
			colors:"black",
			stock:15
		},
		{
			name:"Ryzen 5 5600GT",
			description:"Procesador AMD ",
			price:326843,
			categorie:"Procesadores",
			colors:"nonek",
			stock:13
		},
		{
			name:"Memorias ram 8GB 3200Mhz",
			description:"Memoria ram DDR4 ",
			price:36000,
			categorie:"Memorias Ram",
			colors:"black",
			stock:10
		},
		{
			name:"Disco Solido Kingston 256 GB",
			description:"Disco de estado solido",
			price:32762,
			categorie:"Discos",
			colors:"black",
			stock:8
		},
		

	]
	
	
	
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