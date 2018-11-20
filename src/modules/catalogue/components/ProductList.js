import React from 'react';
// import Card from 'modules/catalogue/components/Card';
import CardList from 'modules/catalogue/components/CardList';
import Card from 'modules/catalogue/components/Card/Card';

const ProductList = ({ products }) => (
    <CardList>
        {products && products.map((product) => (
            <Card key={product.title} />
        ))}
    </CardList>
);

export default ProductList;
// <CardList.Item>
            //     <Card title="testing">
            //         <Card.Image alt="hello" src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/eglfcvhqzkzxfexmrdnk/pro-sleeveless-training-top-AKTd1BAM.jpg" />
            //         <Card.Text>
            //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel justo in nisi pharetra gravida sed in purus. Praesent hendrerit dictum lacus, in vulputate sem malesuada in. 
            //         </Card.Text>
            //     </Card>
            // </CardList.Item>