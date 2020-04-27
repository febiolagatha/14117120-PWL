export function allBlog(){
        return Blogs
}

export function fetchBlog(id) {
        return Blogs.map((data)=>{
                if(data.id == id){
                        return data
                }
        }
}

export function profiles(){
        return Profile
}
