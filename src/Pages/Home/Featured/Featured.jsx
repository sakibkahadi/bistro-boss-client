import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20" >
            <SectionTitle heading="Featured Item" subHeading="check it out"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt12 px-36 text-white">
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">When can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ducimus laborum rerum minus, praesentium itaque? Veniam voluptate eum labore. Architecto nam magni magnam qui repudiandae tempore veniam sint voluptatibus officia molestiae. Similique eligendi fugit, ipsum beatae velit deleniti ipsam accusamus. Esse iste adipisci sapiente ab deleniti magnam cumque harum alias?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;