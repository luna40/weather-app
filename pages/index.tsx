import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Paper,TextInput, Button,Text, Group } from '@mantine/core'
import { useState } from 'react'

// Design user interphase
//call the openWeather API
//Sho user data based of the API result

export default function Home() {
  const[cityImput, setcityimput]=useState("");
  async function getWeatherData() {
    console.log("button pressed");
  }

  console.log(cityImput);
  return (
    <div
    style ={
      {
        position: "static",
        height: "100vh",
        backgroundImage :"url('https://littlevisuals.co/images/dunham.jpg?nf_resize=smartcrop&w=500&h=375')",
        backgroundSize: "cover"
      }
    }>
      <div style={{
        position:"absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      }}>
      <Paper  withBorder p="lg" style={{maxwidth: "500px"}}>
        <Group position='apart'>
          <Text size={'xl'} weight= {'500'}>
            Get Weather
          </Text>
        </Group>
        <Group position='apart'>
          <Text size={'lg'} weight= {'500'}>
            choose your State below!
          </Text>
        </Group>
        <Group position='apart' mb='xl'>
         <TextInput label = "City Name"   placeholder = "ex: Los Angeles"
         onChange={(e) => setcityimput(e.target.value)}> 

           
         </TextInput>
        </Group>
        <Group >
          <Button variant='gradient' size='md' onClick={()=> getWeatherData()}>
            Get Weather
          </Button>
        </Group>
      
      </Paper>
      </div>
      
    </div>
    
  )
}
