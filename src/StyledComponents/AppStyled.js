import styled from 'styled-components';
//postslist
export const PostsListContainer= styled.div`
 
 border-radius:5px ;
 backdrop-filter: blur(20px);
 box-shadow:2px 2px 2px ;
`
//main app
export const MainDivApp= styled.div`
background-color: #ffffff;
`
export const SecondDivApp= styled.div`
background-image:url("/imgs/bg.png") ;
background-repeat:no-repeat ;
background-position-x: center;
padding-left:80px ;
padding-right:80px ;
min-height:100vh ;`
//navbar
export const NavBarDivMain= styled.div`
padding:20px 100px 40px 100px ;
display:flex ;
align-items:center ;
justify-content:space-between ;
`

export const LogoPosts= styled.span`
color: #FF9900 ;
font-size:24px ;
font-weight:600 ;
text-transform:uppercase ;
`
export const AddNewPost= styled.div`

`
//popup create or update post
export const Form=styled.form`
padding:20px ;


`