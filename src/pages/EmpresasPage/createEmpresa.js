import { Form, Button } from "../../components/form";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import Title from "../../components/title";
import * as api from "../../service/apiEmpresas";
import { useAuth } from "../../contexts/AuthContext";

export default function Addresponsavels() {
	const { token } = useAuth();
	const [empresa, setEmpresa] = useState({
		nome: "",
		cnpj: "",
		descricao: "",
	});

	const [responsavel, setResponsavel] = useState({
		nome: "",
		telefone: "",
		cnpj: "",
		cidade: "",
		estado: "",
		rua: "",
		bairro: "",
	});

	function handlerInput(e, obj, act) {
		act({ ...obj, [e.target.name]: e.target.value });
	}

	async function save() {
		try {
			console.log(empresa);
			await api.create(empresa, token);
		} catch (err) {
			console.log(err);
		}
		return;
	}

	return (
		<>
			<Title>Empresa</Title>
			<Form width={"100%"} inputHeight={"35px"}>
				<Grid container spacing={2}>
					<Grid xs={8}>
						<input
							required
							placeholder="Nome"
							type="text"
							name="nome"
							value={responsavel.name}
							onChange={(e) => handlerInput(e, empresa, setEmpresa)}
						/>
					</Grid>
					<Grid xs={4}>
						<input
							required
							placeholder="CNPJ"
							type="text"
							name="cnpj"
							value={responsavel.name}
							onChange={(e) => handlerInput(e, empresa, setEmpresa)}
						/>
					</Grid>
					<Grid xs={12}>
						<input
							required
							placeholder="Descrição"
							type="text"
							name="descricao"
							value={responsavel.name}
							onChange={(e) => handlerInput(e, empresa, setEmpresa)}
						/>
					</Grid>
				</Grid>
			</Form>
			<Title>Reponsavel</Title>
			<Form width={"100%"} inputHeight={"35px"}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<input
							placeholder="Nome"
							type="text"
							name="nome"
							value={responsavel.name}
							onChange={(e) => handlerInput(e, responsavel, setResponsavel)}
						/>
					</Grid>
					<Grid xs={3}>
						<input
							placeholder="Telefone"
							type="text"
							name="Telefone"
							value={responsavel.telefone}
							onChange={(e) => handlerInput(e, responsavel, setResponsavel)}
						/>
					</Grid>
					<Grid xs={3}>
						<input
							placeholder="CEP"
							type="text"
							name="cep"
							value={responsavel.cep}
							onChange={(e) => handlerInput(e, responsavel, setResponsavel)}
							maxLength={50}
						/>
					</Grid>
					<Grid xs={5}>
						<input
							placeholder="Cidade"
							name="cidade"
							value={responsavel.cidade}
							onChange={(e) => handlerInput(e, responsavel, setResponsavel)}
						/>
					</Grid>
					<Grid xs={7}>
						<input
							placeholder="Estado"
							name="estado"
							value={responsavel.estado}
							onChange={(e) => handlerInput(e, responsavel, setResponsavel)}
						/>
					</Grid>
					<Grid xs={6}>
						<input
							placeholder="Rua"
							name="rua"
							value={responsavel.rua}
							onChange={(e) => handlerInput(e, responsavel, setResponsavel)}
						/>
					</Grid>
					<Grid xs={6}>
						<input
							placeholder="Bairro"
							name="bairro"
							value={responsavel.bairro}
							onChange={(e) => handlerInput(e, responsavel, setResponsavel)}
						/>
					</Grid>
				</Grid>
			</Form>
			<Button
				onClick={() => {
					save();
				}}
			>
				Criar
			</Button>
		</>
	);
}