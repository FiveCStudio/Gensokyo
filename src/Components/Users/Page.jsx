import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import { ThemeContext } from '../Themes/ThemeProvider.tsx';

export default function Page() {

  //const URL = "https://64abc0e79edb4181202e7649.mockapi.io/gensokyoPeps"; - MockAPI data
  //const URL = "https://localhost:7049/api/people"; //- Local .NET API
  const URL = "https://peopleapi1141.azurewebsites.net/api/people"; // - Online Azure Hosted .NET API
  const [apiData, SetApiData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const {theme} = useContext(ThemeContext);
  //const {path} = useMatch();
  //Using normal Fetch javascript
  // useEffect(() => {
  // fetch(URL)
  //   .then(response => response.json())
  //   .then(data => {
  //     SetApiData(data)
  //   })
  //   .catch(error => {
  //     console.log("Something is wrong:" + error);
  //   });
  // },[]);
  //Using Axios methods to get API
  useEffect(() => {
    axios
      .get(URL)
      .then(response => response.data)
      .then(test => { SetApiData(test); SetLoading(false) })
      .catch(error => { console.log("Something is wrong:" + error); })
  }, []);
  function ViewCards() {
    return (
      <>
        {apiData.map((test) => (
          <Card key={test.id} className='card' 
          sx={{
            color:theme.color, 
            maxWidth: '70%' ,
            backgroundColor:theme.backgroundColor, 
            transition:theme.transition,
            
          }}>
            <CardMedia
              sx={{ height: 300 }}
              image={test.image}
              title={test.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color='inherit'>
                {test.name}
              </Typography>
              <Typography variant="body2" color="inherit">
                {test.age}
              </Typography>
              <Typography variant="body2" color="inherit">
                {test.job}
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{marginRight:'auto'}} size="small"><Link>Share</Link></Button>
              <Button style={{marginLeft:'auto'}} size="small"><Link to={`${test.id}`}>Detail</Link></Button>
            </CardActions>
          </Card>
        ))}
      </>
    )
  }

  function DefaultCards() {
    return (
      <Card className='card' sx={{ maxWidth: '70%',backgroundColor:theme.backgroundColor }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://gamepress.gg/lostword/sites/lostword/files/2022-02/321.png"
          title="name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            age
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            job
          </Typography>
        </CardContent>
        <CardActions>
          <Button color='inherit' size="small"><Link>Share</Link></Button>
          <Button color='inherit' size="small"><Link>Detail</Link></Button>
        </CardActions>
      </Card>
    )
  }

  return (
    <div className='page'>
      {loading ? <LoadingScreen /> : ''}
      {loading ? <DefaultCards/> : <ViewCards/>}
    </div>
  )
}
