import { throwError } from "../throwError.js"

interface Category {
	id: number;
	name: string;
}

export const createPost = async () => {
  let categories: Category[] = await fetch("/api/categories/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())

  const createPost = document.createElement("div");
  createPost.classList.add("create_post");
  createPost.innerHTML = /*html*/ `
    <div class="create_post">
				<h2>Создать заявку</h2>
        <input type="text" class="create_post_title" placeholder="Заголовок" id="create_title">
        <textarea class="create_post_text" placeholder="Описание" id="create_desc">Описание</textarea>
        <select class="create_post_category" id="create_category">
            ${categories.map((category) => {
        return /*html*/ `
                    <option value="${category.id}">${category.name}</option>
                `;
    })}
        <input type="file" class="create_post_image" id="create_file">
				<button class="create_post_button" id="createAction" type="button">Создать</button>
    </div>
  `;
  document.body.appendChild(createPost);
	let resp
	document.getElementById("createAction").addEventListener("click", async () => {
		const title = document.getElementById("create_title") as HTMLInputElement;
		const desc = document.getElementById("create_desc") as HTMLInputElement;
		const category = document.getElementById("create_category") as HTMLInputElement;
		console.log(title.value, desc.value, category.value)
		try {
			const response = await fetch("/api/posts/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title: title.value,
					description: desc.value,
					category: [Number(category.value)],
					authorId: localStorage.getItem("id"),
				}),
			});
			resp = await response;
			console.log(resp.status === 201)
			resp.status === 201
				? createPost.remove()
				: throwError("Ошибка", "Ошибка создания поста", "error", "createAction");
		} catch (e) {
			throwError("Ошибка", "Ошибка создания поста", "error", "createAction")
			createPost.remove()
		}
	})
}
