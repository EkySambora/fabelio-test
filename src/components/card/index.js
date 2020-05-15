import React from 'react'
import styled from 'styled-components'
import { formatPrice } from 'utils'
const Card = (props) => {
    const {name, price, delivery_time, description, furniture_style} = props.products

    return (
        <Cover>
            <div className="title">
                <h3>{name.substring(0, 15)}</h3>
                <p>Rp. {formatPrice(price)}</p>
            </div>
            <div className="description">
                <p className="desc">{description.substring(0, 114)}...</p>

                <div className="styles">
                    {furniture_style.map((frs,i)=> <p key={i}>{frs}, </p>)}
                </div>

                <div className="deliver">
                    <p>{delivery_time} Days</p>
                </div>

            </div>
        </Cover>
    )
}

const Cover = styled.div`
    width:42%;
    padding:25px;
    margin-top:20px;
    border-radius: 7px;
    -webkit-box-shadow: 1px 4px 9px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 4px 9px -7px rgba(0,0,0,0.75);
    box-shadow: 1px 4px 9px -7px rgba(0,0,0,0.75);

    .title{
        display:flex;
        justify-content: space-between;
        p{
            color:orange;
            font-weight:bold;
        }
    }

    .description{
        .desc{
            margin:10px 0;
        }

        .styles{
            display:flex;
            p{
                color: #106cc8;
            }
        }

        .deliver{
            float:right;
            p{
                text-decoration:underline;
                font-weight:bold;
                cursor: pointer;
                color: #106cc8;
            }
        }
    }
`;


export default Card;