
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const LeadForm = ({ buttonText = "Quero proteger e multiplicar meu dinheiro" }) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Save lead to Supabase
    try {
      const { error } = await supabase
        .from('investment_leads')
        .insert([formData]);
      
      if (error) {
        console.error('Error saving lead:', error);
      } else {
        console.log('Lead saved successfully');
      }
    } catch (err) {
      console.error('Error during lead submission:', err);
    }
    
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
    
    // Reset submitted state after 3 seconds and redirect to WhatsApp
    setTimeout(() => {
      setSubmitted(false);
      
      // Abrir link do WhatsApp em nova janela/aba
      const whatsappUrl = `https://wa.me/5564999886688?text=Olá, meu nome é ${encodeURIComponent(formData.name)}. Gostaria de agendar uma consultoria.`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
