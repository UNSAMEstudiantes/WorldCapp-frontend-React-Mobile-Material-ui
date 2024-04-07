import PropTypes from 'prop-types'
import { Card, CardContent, CardHeader, IconButton, useTheme , Divider} from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'

const GenericCard = ({ titulo , content , onEdit, onDelete, icono, goToDetalles}) => {
  const globalTheme = useTheme()

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: globalTheme.spacing(4),
        borderRadius: '1.2rem',
        border: '1px solid black',
        boxShadow: '-2px 2px 4px 0px rgba(0, 0, 0, 0.75)',
        pb: 0,
      }}
    >
      <CardHeader
        data-testid = "headerCard"
        action={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', p: 1 }}>
           <IconButton data-testid="botonEliminar" onClick={onDelete}>
            <Delete />
          </IconButton>
          <IconButton data-testid="botonEditar" size="small" onClick={onEdit}>
            <Edit />
          </IconButton> 
          </div>
        }
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            {icono}
           {titulo}
          </div>
        }
      />
      <Divider style={{ width: '90%', height: '1px', backgroundColor: '#000040', margin: '0 auto' }}/>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 0 }} style={{ paddingBottom: 0 }} onClick={goToDetalles}>
        {content}
      </CardContent>
    </Card>
  )
}

GenericCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  icono: PropTypes.node.isRequired,
  goToDetalles: PropTypes.func.isRequired
}

export default GenericCard
