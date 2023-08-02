import React,{useState, useEffect} from 'react'
import { styled } from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'

import TopNav from '../components/TopNav'
import { fetchMovies, getGenres } from '../store'
import SliderContainer from '../components/SliderContainer'

const Netflix = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    

    const movies = useSelector((state)=> state.netflix.movies);
    const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGenres())
    });

    useEffect(()=>{
        if(generesLoaded){
            dispatch(fetchMovies({type: "all"}))
        }
    });



window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false: true)
    return ()=>(window.onscroll = null)
};


// console.log(movies)


  return (

    <HeroContainer>
      <div className='title'>
        adnjkdnkjn
      </div>
      <div className='title1'>
        Trending Movies Today
      </div>
    <div className='hero'>
        <TopNav isScrolled={isScrolled} />
  
    </div>
    <SliderContainer movies={movies}/>
    </HeroContainer>
  )
}


const HeroContainer = styled.div`
background-color: black;
    .hero{
        position: relative;
        .background-image{
            filter: brightness(40%);
        }
        img{
            height: 70vh;
            width: 100%;
        }
        
    }
    .title{
      background-color: black;
      border: 25px solid black;
      box-sizing: 15px;
    }
    .title1{
      background-color: #080d0d;
      border: 25px solid black;
      color: white;
      text-align: center;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-size: 45px;
      margin: -25px;
      padding: 0;
    
    }
`

export default Netflix