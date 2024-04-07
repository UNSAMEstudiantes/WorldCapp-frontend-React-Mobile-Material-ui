import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { TextField , Button, Select, InputLabel, MenuItem} from "@mui/material"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const BasicModal = ({ openModal, seleccion, cerrarModal, operacion }) => {
  const [confederacion, setConfederacion] = useState(seleccion.confederacion)

  const {
        register, 
        handleSubmit, 
        formState : { errors }} = useForm({
        defaultValues:{
            id: seleccion ? seleccion.id : "",
            pais: seleccion ? seleccion.pais : "",
            copasDelMundo: seleccion ? seleccion.copasDelMundo : "",
            confederacion: seleccion ? seleccion.confederacion : ""
        }
    })


    const onSubmit = handleSubmit((data) => {
        operacion(data)
        cerrarModal()
    })

  return (
    <div>
      <Modal
        open={openModal}
        onClose={cerrarModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={onSubmit}>
                <div style={{display: "flex", flexDirection: "column", color: "black"}}>
                    <TextField inputProps={{"data-testid":"pais-edit"}} id="standard-basic" label="Pais" variant="standard" style={{marginBottom: "1rem"}} 
                    {...register("pais", {
                        required: "El pais es requerido"
                    })}
                    error={errors.pais}
                    helperText={errors.pais?.message}
                    />
                    <TextField inputProps={{"data-testid":"copasDelMundo-edit"}} id="standard-basic" label="Copas del Mundo" variant="standard" style={{marginBottom: "1rem"}} 
                    {...register("copasDelMundo", {
                        required: "La cantidad de copas del mundo son requeridas"
                    })}
                    error={errors.copasDelMundo}
                    helperText={errors.copasDelMundo?.message}
                    />
                    <InputLabel id="demo-simple-select-label" style={{marginLeft: "0", transform: "translate(0, -1.5px) scale(0.75)"}}>Confederacion</InputLabel>
                    <Select
                    inputProps={{"data-testid":"confederacion-edit"}}
                    labelId="demo-simple-select-label"
                    {...register("confederacion", {
                        required: "La confederacion es requerida"
                    })}
                    value={confederacion}
                    variant='standard'
                    label="Confederacion"
                    onChange={(event) => {
                        setConfederacion(event.target.value)
                    }}
                    style={{marginBottom: "1rem"}}
                    >
                        <MenuItem value={"UEFA"}>UEFA</MenuItem>
                        <MenuItem value={"CONMEBOL"}>CONMEBOL</MenuItem>
                        <MenuItem value={"CONCACAF"}>CONCACAF</MenuItem>
                        <MenuItem value={"AFC"}>AFC</MenuItem>
                        <MenuItem value={"CAF"}>CAF</MenuItem>
                        <MenuItem value={"OFC"}>OFC</MenuItem>
                    </Select>
                    <div style={{display: "flex", flexDirection: "column", color: "black"}}>
                        <Button variant="text" onClick={cerrarModal}>Volver</Button>
                        <Button variant="contained" type='submit'>Guardar</Button>
                    </div>
                </div>
            </form>
        </Box>
      </Modal>
    </div>
  )
}

BasicModal.propTypes = {
    openModal: PropTypes.boolean,
  seleccion: PropTypes.shape({
    id: PropTypes.number,
    pais: PropTypes.string,
    copasDelMundo: PropTypes.number,
    confederacion: PropTypes.string,
  }).isRequired,
  cerrarModal: PropTypes.func,
  operacion: PropTypes.func
}

export default BasicModal
