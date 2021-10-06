import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppointmentCard from './AppointmentCard'
import Grid from '@material-ui/core/Grid'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import FavDrawer from './FavDrawer'

const useStyles = makeStyles(({ palette }) => ({
    card: {
      borderRadius: 12,
      minWidth: 256,
      textAlign: 'center',
    },
    avatar: {
      width: 60,
      height: 60,
      margin: 'auto',
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: '0.5px',
      marginTop: 8,
      marginBottom: 0,
    },
    subheader: {
      fontSize: 14,
      color: palette.grey[500],
      marginBottom: '0.875em',
    },
    statLabel: {
      fontSize: 12,
      color: palette.grey[500],
      fontWeight: 500,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      margin: 0,
    },
    statValue: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
      letterSpacing: '1px',
    },
  }));


function UserAppointmentContainer({schedules, onLogout, currentUser, handleDeleteAppointment}) {

    const styles = useStyles();
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
      borderColor: 'rgba(0, 0, 0, 0.08)',
      height: '50%',
    });

    return (

        <>
             <div>
            <Card className={cx(styles.card, shadowStyles.root)}>
                <CardContent>
                    <div style={{marginRight: '250vh'}}>
                        <FavDrawer onLogout={onLogout} currentUser={currentUser}/>
                    </div>
                        <Avatar className={styles.avatar} src={currentUser.avatar} />
                            <h3 className={styles.heading}>{currentUser.username}</h3>
                        {/* <span className={styles.subheader}>Poland</span> */}
                </CardContent>
                <Divider light />
            </Card> 
            </div>
            <Grid container spacing={4} >
                {schedules.filter(schedule => schedule.client_id === currentUser.id).map((schedule) => 
                <Grid item key={schedule.id} xs={12} md={6} lg={4}>
                    <AppointmentCard  schedule={schedule} currentUser={currentUser} handleDeleteAppointment={handleDeleteAppointment}/>
                    </Grid>)}
            </Grid>

        </>
    )

}
export default UserAppointmentContainer;