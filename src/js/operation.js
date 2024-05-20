export function listWihtInnerHtml(coders, tbody) {

  tbody.innerHTML = "";
  coders.forEach(coder => {

    tbody.innerHTML += `<tr>
        <th scope="row">${coder.id}</th>
        <td>${coder.name}</td>
        <td>${coder.lastName}</td>
        <td>${coder.email}</td>
        <td><button type="button" data-id="${coder.id}" class="btn btn-danger">Delete</button>
        <button type="button" data-id="${coder.id}" class="btn btn-primary">Edit</button>
        <button type="button" data-id="${coder.id}" class="btn btn-warning">Detail</button>
        </td>

      </tr>`
  });
}

export function create(coders, name, lastName, email,) {

  let newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value
  }
  coders.push(newCoder)


}

export function deleateItem (coders, ideliminar) {

  coders.forEach((coder,index) => {
    if (coder.id==ideliminar) {
       coders.splice(index,1)
    }
 });
}
