import React, { useState } from 'react';
import { Box, Button, Collapsible, Grommet, Heading, Layer, ResponsiveContext, Form, Stack} from 'grommet';
import { FormClose, Menu } from 'grommet-icons';
import VideoPlayer from './VideoPlayer';
import PresentationPlayer from './PresentationPlayer';
import styled from 'styled-components';

const testStream = 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8'
//const hongKongStream = 'https://live.patch.to/live/hello.m3u8';
const badQuality = 'bad.mp4'

const videoJsOptions = {
  autoplay: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  controls: true,
  fluidui: false,
  smoothQualityChange: true,
  liveui: true,
  nativeControlsForTouch: true,
  sources: [
    {
      src: 'bad.mp4',
      type: 'video/mp4',
    },
  ],
  //poster: 'https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
  plugins: {

  }
};

function App() {

  return ( 
    <div>
    <VideoPlayer {...videoJsOptions} />
    <VideoPlayer {...videoJsOptions} /> 
    </div>
  
  );
}

export default App;
