import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					DeWork4Us<span>Dapp</span>
				</h1>
				<p>
					Gerenciador de Contratos{" "}
					<span>DeWork4Us</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://fabrikabr.org"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Adicionar Contrato</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://fabrikabr.org"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Pesquisar Contrato</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://fabrikabr.org"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Pagar Contrato</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="DeWork4Us by Fabrikabr.io"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/FabrikaBr"
							target={"_blank"}
						>
							Siga-nos no Github
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/BrFabrika"
							target={"_blank"}
						>
							Siga-nos no Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
