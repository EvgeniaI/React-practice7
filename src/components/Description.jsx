import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
        
        <motion.div id='div1'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          Samet Nangshe Viewpoint</motion.div>

          <motion.div id='div2'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1,
            
          }}
          transition={{
            delay:2,
            duration:2
          }}>
            <motion.img
            src='img/sammet.jpeg'
            className='sammet'
            width={650}

            initial={{
              opacity:1
            }}

            transition={{
              duration:2
            }}
/>
          </motion.div>

        <div id='div3'>
          <motion.div
          initial={{ 
            opacity: 0,
            delay: 4, 
            scale: 1,
            x:10,
            y:-3000
           
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x:0,
            y:-500
          }}
          transition={{
            delay:0.5           
          }}
          >
            Доступные варианты размещения:
            </motion.div>
            </div>
            <div id='icons'>
            <motion.div
          initial={{ 
            opacity: 0,
            x:10,
            y:-500
           
          }}
          animate={{ 
            opacity: 1, 
            x:10,
            y:-500
          }}
          transition={{
            delay:4,
            duration:1           
          }}
          >
            <motion.img
            src='img/hotel.png'
            className='hotel'
            width={80}
            
            initial={{
              opacity:1,
              scale:1
              
            }}

            animate={{
              rotate:360              
            }}
            transition={{
              duration:3,
              delay:3,
              repeatType: 'reverse',
              opacity:1,
             
            }}
            >              
            </motion.img>
            <motion.img
            src='img/tent4.png'
            className='tent'
            width={80}
            
            
            
            
            initial={{
              opacity:1,
              scale:1
              
            }}

            animate={{
              rotate:360              
            }}
            transition={{
              duration:3,
              delay:3,
              repeatType: 'reverse',
              opacity:1,
             
            }}
            >              
            </motion.img>
            </motion.div>
            </div>
          
        

    </div>
  )
}

export default Description