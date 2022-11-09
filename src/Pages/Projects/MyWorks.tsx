import React from 'react';
import style from './MyWorks.module.scss'
import {Work} from "./Work/Work";
import socialImg from '../../assets/images/social.jpg'
import todolistImg from '../../assets/images/todolist.jpg'
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

export const MyWorks = () => {
    return (
        <div className={style.worksContainer}>
            <h3 className={style.title}>Project</h3>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    works.map((el, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Work title={el.title} description={el.description} image={el.image}/>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </div>
    );
};


const works = [
    {
        title: 'Social Network',
        image: socialImg,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
    },
    {
        title: 'TodoList',
        image: todolistImg,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.'
    },
    {
        title: 'Counter',
        image: socialImg,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
]

