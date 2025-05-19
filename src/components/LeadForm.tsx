
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";

const LeadForm = ({ buttonText = "Quero minha consultoria gratuita" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Registrar o lead quando o Supabase estiver integrado
    // Aqui você implementaria o código para salvar na tabela após integrar o Supabase
    
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
    
    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      
      // Redirecionar para WhatsApp
      window.location.href = `http://wa.me/64999886688?text=Olá, meu nome é ${encodeURIComponent(formData.name)}. Gostaria de agendar uma consultoria.`;
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
      {submitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Recebemos sua solicitação!</h3>
          <p className="text-gray-600">Você será redirecionado para falar com o assessor em instantes...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 focus:ring-darkBlue focus:border-darkBlue"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 focus:ring-darkBlue focus:border-darkBlue"
              required
            />
          </div>
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 focus:ring-darkBlue focus:border-darkBlue"
              required
            />
          </div>
          <div>
            <Button 
              type="submit" 
              className="btn-primary w-full"
            >
              {buttonText}
            </Button>
          </div>
          <div className="text-xs text-center text-gray-500 flex items-center justify-center gap-1 mt-3">
            <Shield className="h-3 w-3" /> 
            <span>Seus dados estão protegidos</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default LeadForm;
