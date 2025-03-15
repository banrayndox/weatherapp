import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import SickIcon from '@mui/icons-material/Sick';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TsunamiIcon from '@mui/icons-material/Tsunami';

export default function InfoBox({ info }){
    const INIT_URL = "https://images.unsplash.com/photo-1696952433278-0abf5db731ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const HOT_URL = 'https://images.unsplash.com/photo-1489573280374-2e193c63726c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const COLD_URL = 'https://plus.unsplash.com/premium_photo-1671658221576-8d9a4b04bd8e?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const RAIN_URL = 'https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return(<>


    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? RAIN_URL : (info.temp > 23 ? HOT_URL : COLD_URL )}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {info.city}  {info.humidity > 80 ? <TsunamiIcon /> : (info.temp > 23 ? <WhatshotIcon /> : <SickIcon /> )}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <p> Temperature = {info.temp}&deg;C </p>
            <p> Humidity = {info.humidity} </p>
            <p> Minimum Temperature = {info.tempMin} </p>
            <p> Maximum Temperature = {info.tempMax} </p>
            <p> The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

     </>)
}