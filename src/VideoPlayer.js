import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import videojs from 'video.js';
import 'videojs-contrib-quality-levels';
import 'video.js/dist/video-js.css';
//import './videojs-custom-styles.css';


export default function VideoPlayer(props) {

    const videoRef = useRef();
    let player;

    useEffect(() => {
        // whatever we do when component mounts
        player = videojs(videoRef.current, props, function onPlayerReady() {
            console.log('player ready');          
        });

        let qualityLevels = player.qualityLevels();

        // Listen to change events for when the player selects a new quality level
        qualityLevels.on('change', function() {
            console.log('Quality Level changed!');
            console.log('New level:', qualityLevels[qualityLevels.selectedIndex]);
        });

        return() => {
        // whatever we do when component unmounts
        if(player) {
            player.dispose();
        }
        }
      }, []);

    player && player.on('click', function() {
        console.log('clicked')
        if (player.paused()) {
          player.play();
        } else {
          player.pause();
        }
    });

    return(
        <video ref={ videoRef } className="video-js vjs-tech vjs-big-play-centered" playsInline></video>
    )
}