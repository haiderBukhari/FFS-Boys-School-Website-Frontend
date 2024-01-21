import Blog1 from "../assets/courses/web_dev_heading.webp"

const BlogComponent = () => {
    const WebDevelopmentUrl = [
        {
            name: "Getting Started with the Basics of HTML",
            url: "https://bit.ly/48Yo8tN"
        },
        {
            name: "Learning and Mastering CSS",
            url: "https://bit.ly/3SBcgJ3"
        },
        {
            name: "Mastring Javascript",
            url: "https://bit.ly/3SqUZlD"
        },
        {
            name: "Learning about Website Animations",
            url: "https://bit.ly/3Ockww6"
        }
    ]
    return (
        <>
            <div style={{backgroundColor: '#1a76d1'}} className={`breadcrumbs color-blue`}>
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2>Web Development Course</h2>
                                <ul className="bread-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li><i className="icofont-simple-right"></i></li>
                                    <li className="active">courses</li>
                                    <li><i className="icofont-simple-right"></i></li>
                                    <li className="active">web development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="news-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-main">
                                        <div className="news-head" style={{width: "100%"}}>
                                            <img src={Blog1} alt="#" />
                                        </div>
                                        <h1 className="news-title"><a href="news-single.html">The complete Full Stack Website development Course and Roadmap in 2024 in URDU.</a></h1>
                                        <div className="meta">
                                            <div className="meta-left flex justify-center items-center">
                                                <span className="author">Haider Bukhari</span>
                                            </div>
                                            <div className="meta-right">
                                                <span className="date"><i className="fa fa-clock-o"></i>20 Jan 2024</span>
                                            </div>
                                        </div>
                                        <div className="news-text">
                                            <p>Learning Web Development no matter is a biggest challenge because in the way to learn the development you non doubt face multiple challenges. <strong> Disclaimer!!! You can start this course on Mobile!! after this when you think the need of computer is necessary go for it.</strong> Try to learn every day no matter it is weekends just 20 minutes with consistent efforts and dedication can change the direction of this undirected arrow. </p>
                                            <p>Note. There are bigger fish in this world of technology donot ever compare your self with other and never happend to have some sort of demotivation. every successfull man in this world start from knowing nothing. And no matter you are the amongst them. So welcome to the party.😊</p>
                                            <div className="image-gallery">
                                                <h1 className="news-title font-serif font-bold mt-6">WEBSITE DEVELOPMENT ROADMAP</h1>
                                                <div className="row flex justify-center items-center">
                                                            <img src="https://coder-coder.com/wp-content/uploads/2019/08/roadmap-development-infographic.jpg" alt="#" />
                                                </div>
                                            </div>
                                            <p>So Get Started With Courses</p>
                                            <div>
                                            {
                                                WebDevelopmentUrl.map((Items, index)=> (
                                                    <div className="mt-4 flex flex-wrap">
                                                        <p><span className="mr-1 font-bold">{index+1}.</span>{Items.name}</p>
                                                        <a className="text-blue-600 ml-3" style={{color: "blue"}} href={Items.url} target="_blank" rel="noreferrer">{Items.url}</a>
                                                    </div>
                                                ))
                                            }
                                            <p className="mt-4">More Comming Soon...😊</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="main-sidebar">
                                <div className="single-widget category">
                                    <h3 className="title">Course Categories</h3>
                                    <ul className="categor-list">
                                        <li><a href="/">Web Development</a></li>
                                        <li><a href="/">Graphic Designing (In Progress)</a></li>
                                        <li><a href="/">Video Editing (In Progress)</a></li>
                                        <li><a href="/">Social Media Marketing (In Progress)</a></li>
                                        <li><a href="/">Getting Started with Freelancing</a></li>
                                    </ul>
                                </div>
                                <div className="single-widget side-tags">
                                    <h3 className="title">Tags</h3>
                                    <ul className="tag">
                                        <li><a href="/">Website Development</a></li>
                                        <li><a href="/">HTML</a></li>
                                        <li><a href="/">CSS</a></li>
                                        <li><a href="/">JAVASCRIPT</a></li>
                                        <li><a href="/">Dom Manipulation</a></li>
                                        <li><a href="/">GASP</a></li>
                                        <li><a href="/">Ecommerce</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogComponent