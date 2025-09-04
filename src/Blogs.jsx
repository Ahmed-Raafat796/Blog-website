import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {

    const blogs= [
        {
            "id":1,
            'title': 'HTML',
            'desc':" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!",
            'coverImg': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2d36a7f-7ca4-4858-b311-2c23ee271452/dby8y4c-9245e178-19b3-4005-91d8-ddc7c0ac9bf5.png/v1/fill/w_1024,h_576,q_80,strp/html__4k__by_thegoldenbox_dby8y4c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZTJkMzZhN2YtN2NhNC00ODU4LWIzMTEtMmMyM2VlMjcxNDUyXC9kYnk4eTRjLTkyNDVlMTc4LTE5YjMtNDAwNS05MWQ4LWRkYzdjMGFjOWJmNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.k8S14hli7eGc2FBMwvFiYf1ehsYEMwZK0_DNmOZrC3E',
            'authorName': 'William Shakespeare',
            'authorImg':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVCgtPs4Bv7ZCpEHF2VAO_oP2rUCZXHMNrA&s',
            'authorDesc': 'Famous Author',
        },

         {
            "id":2,
            'title': 'Tailwind',
            'desc':" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!",
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png',
            'authorName': 'William Shakespeare',
            'authorImg':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVCgtPs4Bv7ZCpEHF2VAO_oP2rUCZXHMNrA&s',
            'authorDesc': 'Famous Author',
        },

         {
            "id":3,
            'title': 'React.js',
            'desc':" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!",
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1200/0*syUfAfQ5v-51iAo1.png',
            'authorName': 'William Shakespeare',
            'authorImg':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVCgtPs4Bv7ZCpEHF2VAO_oP2rUCZXHMNrA&s',
            'authorDesc': 'Famous Author',
        },

         {
            "id":4,
            'title': 'Angular',
            'desc':" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!",
            'coverImg': 'https://wallpapers.com/images/hd/angular-logo-in-glittery-black-m51gr5vhap1khvl2.jpg',
            'authorName': 'William Shakespeare',
            'authorImg':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVCgtPs4Bv7ZCpEHF2VAO_oP2rUCZXHMNrA&s',
            'authorDesc': 'Famous Author',
        },


    ]

    return(

        <div className="w-full bg-blue-100 py-[50px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')" }}>

            <div className="bg-black my-8 w-full h-70 text-white text-center py-20">
                <h1 className="text-7xl cursor-default">Welcome to my blog website</h1>
            </div>
            
            <div className="max-w-[1240px] mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-4 text-black">

                    


                    { blogs.map((blog)=> 
                    
                        <Link to={`/blog/${blog.id}`}>
                            <div className="bg-white rounded-xl overflow-hidden drop-shadow-lg mx-5">
                                <img className="h-56 w-full object-cover" src={blog.coverImg} alt="Blog img" />
                                <div className="p-6">
                                  <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                                  <p className="text-gray-600 text-xl">{blog.desc}</p>
                            </div>
                            </div>
                        </Link>


                    
                    
                    
                    )}



                </div>

            </div>
        </div>

    )
};

export default Blogs
