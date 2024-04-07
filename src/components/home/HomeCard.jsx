/* eslint-disable react/prop-types */
import {
  Card,
  Box,
  CardContent,
  Typography,
} from "@mui/material"
// sx={{ height: 100, width: 100, pl: 1, pb: 1 }}

export const HomeCard = ({ nombre, cantidad, icon }) => {
  return (
    <Card sx={{ display: 'flex', mb: 5, borderRadius: '1.2rem', border: '1px solid black', boxShadow: '-2px 2px 4px 0px rgba(0, 0, 0, 0.75)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', }}>
          {icon}
        </Box>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            {cantidad}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {nombre}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
