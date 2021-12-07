const dateFormat = dateString => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('ru-RU', options)
 };

const dataHelper = data => {
 return data.map(photo => {
   return ({
     id: photo.id,
     isLiked: photo ? photo.liked_by_user : false,
     created: photo ? dateFormat(photo.created_at) : '',
     photoImageSmall: photo && photo.urls ? photo.urls.small : '#',
     photoImageRegular: photo && photo.urls ? photo.urls.regular : '#',
     likes: photo ? photo.likes : 0,
     authorName: photo && photo.user ? photo.user.name : '',
     authorLink: photo && photo.user && photo.user.links ? photo.user.links.html : '#',
     authorAvatar: photo && photo.user && photo.user.profile_image
       ? photo.user.profile_image.small : '#',
   })
 })
}

export default dataHelper