import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import useFetch from "../useFetch";




const BlogContent = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

    

    if (loading) return <h1>Loading ...</h1>;

    if (error) console.log(error);


    const {id}=useParams()
    const post = data?.find((item) => item.id == id);

        const blogs= [
        {
            "id":1,
            'title': 'HTML',
            'desc':" Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <img> and <input> directly introduce content into the page. Other tags such as <p> and </p> surround and provide information about document text and may include sub-element tags. Browsers do not display the HTML tags, but use them to interpret the content of the page. HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. The inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[3] A form of HTML, known as HTML5, is used to display video and audio, primarily using the <canvas> element, together with JavaScript.",
            'coverImg': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2d36a7f-7ca4-4858-b311-2c23ee271452/dby8y4c-9245e178-19b3-4005-91d8-ddc7c0ac9bf5.png/v1/fill/w_1024,h_576,q_80,strp/html__4k__by_thegoldenbox_dby8y4c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZTJkMzZhN2YtN2NhNC00ODU4LWIzMTEtMmMyM2VlMjcxNDUyXC9kYnk4eTRjLTkyNDVlMTc4LTE5YjMtNDAwNS05MWQ4LWRkYzdjMGFjOWJmNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.k8S14hli7eGc2FBMwvFiYf1ehsYEMwZK0_DNmOZrC3E',
            'authorName': 'Tim Berners-Lee',
            'authorImg':'https://i.guim.co.uk/img/media/a963fde3d11ae01cb8eaf84b516ee53446406397/809_402_5801_3481/master/5801.jpg?width=1200&quality=85&auto=format&fit=max&s=809c335ce5ca3239fedfaf9e1b61dba6',
            'authorDesc': 'The Inventor of the World Wide Web',
        },

         {
            "id":2,
            'title': 'Tailwind',
            'desc':" Tailwind CSS is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of utility CSS classes that can be used to style each element by mixing and matching.[5][6]For example, in other traditional systems, there would be a class message-warning that would apply a yellow background color and bold text. To achieve this result in Tailwind, one would have to apply a set of classes created by the library: bg-yellow-300 and font-bold.As of 7 July 2025, Tailwind CSS has over 88,900 stars on GitHub.[7]",
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png',
            'authorName': 'Adam Wathan',
            'authorImg':'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
            'authorDesc': 'Created the popular CSS framework, Tailwind CSS',
        },

         {
            "id":3,
            'title': 'React.js',
            'desc':'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[5][6] that aims to make building user interfaces based on components more "seamless".[5] It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[7][8][9]React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix[a]. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[11][12] A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.',
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1200/0*syUfAfQ5v-51iAo1.png',
            'authorName': ' Jordan Walke',
            'authorImg':'https://thediffpodcast.com/assets/images/jordan-2c43ff762e625d49ea58424e3e74188a.jpg',
            'authorDesc': 'Developed the first version of React in 2011',
        },

         {
            "id":4,
            'title': 'Angular',
            'desc':" Angular (also referred to as Angular 2+)[4] is a TypeScript-based free and open-source single-page web application framework. It is developed by Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. The Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.[5] According to the Stack Overflow Developer Survey, Angular is one of the most commonly used web frameworks.",
            'coverImg': 'https://wallpapers.com/images/hd/angular-logo-in-glittery-black-m51gr5vhap1khvl2.jpg',
            'authorName': 'Miško Hevery ',
            'authorImg':'https://shift.infobip.com/europe/zadar-2021/img/speakers/MiskoHevery@2x-min.jpg',
            'authorDesc': 'Created Angular.js in 2009',
        },
    ]

        let blog = blogs.filter(blog => blog.id == id)
        blog= blog[0]
        

    

    return(
        <div className="w-full  pb-10 bg-blue-100 min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')" }}>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 

            {/*Blog Content */}
            <div className="max-w-[1240 px] mx-auto">
                <div className="grid lg:grid-cols-3  sm:grid-cols-1 gap-8 px-4 sm:pt-20 md:mt-0 text-gray-100">

                    <div className="col-span-2 gap-8 pb-10">

                       
                        <img className="h-70 w-full object-cover px-5 py-5 md:px-0 md:py-0 " src={blog.coverImg} alt="" />
                        <h1 className='font-bold text-2xl my-1 pt-5 cursor-default'>{post?.title}</h1>
                        <div className="pt-5 text-gray-200 cursor-default"><p>{post?.body}</p></div>
                        

                    </div>

                    {/*Author div */}

                    <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5  max-h-60 mt-8 md:mt-0">
                        <div>
                            <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.authorImg} alt="" />
                            <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{blog.authorName}</h1>
                            <p className="text-center text-gray-900 font-medium">{blog.authorDesc}</p>
                        </div>

                    </div>

                </div>

                
            </div> 

            <Footer />
            
            
        </div>
    )


}


export default BlogContent