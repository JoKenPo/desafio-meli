export default function PaymentInfoBox() {
  return (
    <>
      <div className="space-y-4 text-sm border p-4 rounded">
        <div>
          <strong>Outras opções de compra</strong><br />
          <a href="#" className="text-blue-600 hover:underline">Ver 9 opções a partir de R$ 2.508,30</a>
        </div>
      </div>

      <div className="space-y-4 border p-4 rounded">
        <h2 className="font-normal text-lg">Meios de pagamento</h2>
        <ul className="space-y-1 mt-2">
          <li>Pague em até 18x sem juros</li>
          <li>Cartões: Visa, Mastercard, Elo, Hipercard</li>
          <li>Débito: Caixa</li>
          <li>Pix, Boleto</li>
        </ul>
      </div>
    </>
  );
}
