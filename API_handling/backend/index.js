import express from "express"

const app = express();



app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: "Smartphone", imageLink: "https://th.bing.com/th/id/OIP.HxCUDuhXiUIYR73NuIvIvQHaEp?w=1906&h=1196&rs=1&pid=ImgDetMain" },
        { id: 2, name: "Laptop", imageLink: "https://www.bhphotovideo.com/images/images2500x2500/asus_1015e_ds01_10_1_notebook_computer_943487.jpg" },
        { id: 3, name: "Tablet", imageLink: "https://th.bing.com/th/id/OIP.7Yfngojyvd1fvUrOLo2VeQHaHa?rs=1&pid=ImgDetMain" },
        { id: 4, name: "Smartwatch", imageLink: "https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_r825ussaxar_galaxy_watch_active2_lte_1491580.jpg" },
        { id: 5, name: "Camera", imageLink: "https://www.bhphotovideo.com/images/images2500x2500/sony_dsc_hx300_b_cyber_shot_dsc_hx300_digital_camera_926281.jpg" }
      ];
      
      


      if(req.query.search) {
        const filterProduct = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProduct)
        return;
      }
    
      setTimeout(() => {
            res.send(products)
      }, 3000)
})



const port  = process.env.port || 3000;

app.listen(port , ()=>{
    console.log(`Server running on port  ${port}`)
});