$(document).ready(function(){
	$('#getProducts').on('click', function(){
		$.ajax({
			url: '/product',
			method: 'GET',
			success: function(products){
			   $("#test").children().remove()
				$.each(products, function(i, item) {
				  $('#test').append(`
					<tr> 	
						<td class = "id"> ${products[i].id} </td>
						<td> 
							<input type="text" class="name" value="${products[i].name}"/>
						</td>
						<td>
							<button class="update-button">
								Update
							</button>
							<button class="delete-button">
								Delete
							</button>
						</td>
					</tr>							  	
				  `)
				});
			}
		})
	})

	$('#productForm').on('submit', function(){
		let newProduct = $('#newProduct')
		$.ajax({
			url: '/product',
			method: 'POST',
			data: {
				name: newProduct.val()
			},
			success: function(res){
				alert(res)
			}
		})
	})

	$('table').on('click','.update-button', function(){
		let row = $(this).closest('tr')
		let id = row.find('.id').text()
		let name = row.find('.name').val()
		$.ajax({
			url: "/product/" + id,
			method: 'PUT',
			data: {
				name: name
			},
			success: function(res){
				alert(res)
				$('#getProducts').click()
			}
		})
	})

	$('table').on('click', '.delete-button', function(){
		let row = $(this).closest('tr')
		let id = row.find('.id').text()

		$.ajax({
			url: '/product/' + id,
			method: 'DELETE',
			success: function(res){
				alert(res)
				$('#getProducts').click()
			}
		})
	})
})