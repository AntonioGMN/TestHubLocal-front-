import { Form } from "./form";
import Grid from "@mui/material/Unstable_Grid2";

export default function ResponsavelCrud({ obj, setObj }) {
	function handlerInput(e) {
		setObj({ ...obj, [e.target.name]: e.target.value });
	}

	return (
		<Form width={"100%"} inputHeight={"35px"}>
			<Grid container spacing={2}>
				<Grid xs={6}>
					<input
						placeholder="Nome"
						type="text"
						name="nome"
						value={obj.name}
						onChange={(e) => handlerInput(e)}
					/>
				</Grid>
				<Grid xs={3}>
					<input
						placeholder="Telefone"
						type="text"
						name="telefone"
						value={obj.telefone}
						onChange={(e) => handlerInput(e)}
					/>
				</Grid>
				<Grid xs={3}>
					<input
						placeholder="CEP"
						type="text"
						name="cep"
						value={obj.cep}
						onChange={(e) => handlerInput(e)}
						maxLength={50}
					/>
				</Grid>
				<Grid xs={5}>
					<input
						placeholder="Cidade"
						name="cidade"
						value={obj.cidade}
						onChange={(e) => handlerInput(e)}
					/>
				</Grid>
				<Grid xs={7}>
					<input
						placeholder="Estado"
						name="estado"
						value={obj.estado}
						onChange={(e) => handlerInput(e)}
					/>
				</Grid>
				<Grid xs={6}>
					<input
						placeholder="Rua"
						name="rua"
						value={obj.rua}
						onChange={(e) => handlerInput(e)}
					/>
				</Grid>
				<Grid xs={6}>
					<input
						placeholder="Bairro"
						name="bairro"
						value={obj.bairro}
						onChange={(e) => handlerInput(e)}
					/>
				</Grid>
			</Grid>
		</Form>
	);
}