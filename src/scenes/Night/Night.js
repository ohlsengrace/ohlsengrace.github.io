import { useMemo } from 'react';
import './Night.css'


export const Night  = () => {

    const blogData = useMemo(() => [
        {
            id: 0,
            title: 'Day 1 of 60 : Digital Minimalism',
            subtitle: 'Delete it all.',
            image: '',
            imageAlt: '',
            html: 'Today I was sitting in the Denver Internation Airport while deleting every app off my phone.',
        },
        {
            id: 1,
            title: 'How to make a website',
            subtitle: 'It\'s not as hard as you think.',
            image: '',
            imageAlt: '',
            html: '',
        }
    ], [])



  return (
    <div className="Night">
        <h1>A quiet place to think</h1>

        <h4>Welcome to my hole in the web. Feel free to pick my brain.</h4>

        <div className='blog-posts'>
            {blogData.map((post) => {
                return(
                    <div className='blog-post'>
                        <h3>{post.title}</h3>
                        <h4>{post.subtitle}</h4>
                        <p>{post.html}</p>
                    </div>
                )}
            )}  

        </div>



    
    </div>
  )
}
export default Night;