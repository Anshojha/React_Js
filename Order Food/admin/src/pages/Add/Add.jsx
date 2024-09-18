import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {

    const [image , setImages] = useState(false);
    const [data, setData] = useState({
        name : "",
        description : "",
        price : "",
        category : "Salad"
    })

    const onChangehandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    }

    return (
        <div className='add'>
            <form action="" className="flex-col">
                <div className="add-image-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image) :assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e)=>{setImages(e.target.files[0])}} type="file" id='image' hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input type="text" name='name' placeholder='Type here.....' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea name="description" rows="6" placeholder='Write products details here' required></textarea>
                </div>

                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Select category</p>
                        <select name="category" id="">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Desert">Desert</option>
                            <option value="Sandwhich">Sandwhich</option>
                            <option value="Cake">Cake</option>
                            <option value="Veg">Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input type="number" name="price" id="" placeholder='₹20' />
                    </div>
                </div>
                <button type='submit' className='add-btn' >Add</button>
            </form>
        </div>
    )
}

export default Add
