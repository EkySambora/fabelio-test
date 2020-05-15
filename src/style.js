import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  margin-top: 20px;
`;

export const Box = styled.div`
  border: 1px solid #111;
  width: 740px;
  background: white;
`;

export const Header = styled.header`
    background-color: #106cc8;
    width: 700px;
    padding:20px;

    .search{
        width:100%;
        display:block;
        margin-bottom:20px;
        input{
            ::placeholder {
                opacity: 1; 
                color:#fff;
                font-size:20px;
                font-weight:bold;
            }
            letter-spacing: -1px;
            width:48.5%;
            border:none;
            background-color: #106cc8;
            outline:none;
            padding-top:10px;
            padding-bottom:10px;
            border-bottom:1px solid #fff;
            color:#fff;
            font-size:20px;
            font-weight:bold;
        }
    }

    .filter{
        display:flex;
        width: 100%;
        justify-content: space-between; 
        .selectBox{
            width: 49%;
            /* margin-right:20px; */
            border-bottom: 1px solid #fff;
            padding-bottom:5px;
            input{
                width:-webkit-fill-available;
                width:-moz-fill-available;
                border:none;
                padding:10px;
                outline:none;
                cursor: pointer;
                ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    opacity: 1; /* Firefox */
                    font-size:15px;
                    color:grey;
                }
            }
        }

        .Delivery{
            width:49%;
            border-bottom: 1px solid #fff;
            padding-bottom:5px;
            position: relative;
            .arrow {
                width: 0; 
                height: 0; 
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid #123;
                position: absolute;
                    top:11px;
                    right:9px;
            }
            select{
                width:-webkit-fill-available;
                width:-moz-fill-available;
                width: 100%; 
                height: 100%; 
                /* height:33px; */
                padding: 5px;
                color: grey;
                border:none;
                outline:none;
                cursor: pointer;
                background-color:#fff;
                border-radius:0;
                appearance: none;
                option { 
                    color: black; 
                    padding:10px;
                    height:300px;
                }
                option:first-child{
                    color: grey;

                }
            }
        }
    }
`;  

export const Products = styled.div`
    display:flex;
    justify-content: space-between; 
    flex-wrap:wrap;
    width: 700px;
    padding: 0 20px 20px 20px;
`;

export const Card = styled.div`
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

export const Loading = styled.div`
    display: flex;
    width: 100%;
    height: 73vh;
    align-items:center;
    justify-content:center;
    h5{
        text-align:center;
        font-size:20px;
    }
`;

export const Checkboxes = styled.div`
    width: 322px;
    background-color:#fff;
    border: 1px solid grey;
    padding:10px;
    position:absolute;

    /* The container */
    .container {
        display: block;
        position: relative;
        margin-bottom: 20px;
        cursor: pointer;
        font-size: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        right:0;
        height: 20px;
        width: 20px;
        background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: #009688;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 7px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;