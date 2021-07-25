import React from 'react'
import shoeShop from '../../asstes/img/shoe-shop.jpg'
export default function Home() {
    return (
        <div>
            <div className="countainerFilter">
                <div className="filterHeader">
                    <div className="address__founded">
                        <p className="navAddress">Home <span>{window.location.pathname}</span> </p>
                    </div>
                    <h1 className="HomeTitle">Home</h1>
                    <div className="selects submit">Since 2021</div>
                        
                </div>
            </div>
            <article>
                <p><h2>Shoe shop by Mahdi Ghorbani Design Office</h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo.
                <br/>
                <img className="shoeShop" src={shoeShop} alt="shoeShop" />
                <br/>
                Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo. Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.<h3>Best Market in Web</h3> Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo. Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum.</p>
            </article>
        </div>
    )
}
