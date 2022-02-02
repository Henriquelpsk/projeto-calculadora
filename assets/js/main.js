function Criacalculadora() {
	return {

		inicia() {
			this.display.focus();
			this.cliqueBotoes();
			this.pressionaEnter();
		},

		display: document.querySelector('.displayText'),
		clear: document.querySelector('.btn-clear'),

		pressionaEnter() {
			this.display.addEventListener('keyup', e => {
				if (e.key ==='Enter') {
					this.realizaConta();
				}
			})
		},

		cliqueBotoes() {
			document.addEventListener('click', e => {
				const el = e.target;

				if (el.classList.contains('btn-num')) {
					this.btnParaDisplay(el.innerText);
				}

				if (el.classList.contains('btn-clear')) {
					this.limpaDisplay();
				}

				if (el.classList.contains('btn-del')) {
					this.apagaUltimo();
				}

				if (el.classList.contains('btn-eq')) {
					this.realizaConta();
				}
				this.display.focus();
			});
		},


		btnParaDisplay(valor) {
			this.display.value += valor
		},

		limpaDisplay() {
			this.display.value = ''
		},

		apagaUltimo() {
			this.display.value = this.display.value.slice(0, -1);
		},

		realizaConta() {
			let conta = this.display.value;

			try {
				conta = eval(conta);

				if (!conta) {
					alert('Conta invalida');
					return;
				}

				this.display.value = conta;
			} catch (e) {
				alert('Conta Invalida');
				return;
			}

		},
	}
}

const calculadora = Criacalculadora();
calculadora.inicia();