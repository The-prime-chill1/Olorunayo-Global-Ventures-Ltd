import React, { useState } from 'react';
import { X, Calculator, ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function CostEstimatorModal({ isOpen, onClose }) {
  const [materialType, setMaterialType] = useState('interlocking');
  const [quantity, setQuantity] = useState(300);
  const [includeInstallation, setIncludeInstallation] = useState(true);

  if (!isOpen) return null;

  // Approximate baseline benchmark rates for Lagos market guidance
  const estimateCalculations = () => {
    let unitLabel = 'sqm';
    let baseUnitCost = 0;
    let installUnitCost = 0;
    let description = '';

    switch (materialType) {
      case 'interlocking':
        unitLabel = 'Sqm';
        baseUnitCost = 6500; // 60mm/80mm quality paving stones per sqm
        installUnitCost = includeInstallation ? 1800 : 0;
        description = 'Vibro-compressed 60mm/80mm heavy-duty paving stones + sharp sand bedding & compaction';
        break;
      case 'blocks':
        unitLabel = 'Pieces';
        baseUnitCost = 650; // 9" vibrated concrete block
        installUnitCost = includeInstallation ? 150 : 0;
        description = '9-inch high-density machine vibrated hollow concrete blocks (cured & load-tested)';
        break;
      case 'aluminum':
        unitLabel = 'Units (Windows)';
        baseUnitCost = 45000; // standard European-profile casement window
        installUnitCost = includeInstallation ? 6000 : 0;
        description = 'Architectural aluminium casement windows with tinted/reflective tempered glass';
        break;
      case 'granite':
        unitLabel = 'Tons (Quarry Granite)';
        baseUnitCost = 14500; // per ton delivered
        installUnitCost = 0;
        description = 'Certified 3/4-inch or 1/2-inch blue/black crushed quarry granite stone';
        break;
      default:
        break;
    }

    const materialTotal = Number(quantity) * baseUnitCost;
    const installationTotal = Number(quantity) * installUnitCost;
    const grandTotal = materialTotal + installationTotal;

    return {
      unitLabel,
      baseUnitCost,
      installUnitCost,
      materialTotal,
      installationTotal,
      grandTotal,
      description
    };
  };

  const est = estimateCalculations();

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Olorunaye Oke / Olorunayo Global Ventures Ltd,\n\n` +
      `I used your Online Project Cost Estimator for my site:\n` +
      `- Category: ${materialType.toUpperCase()}\n` +
      `- Scope: ${quantity} ${est.unitLabel}\n` +
      `- Installation Required: ${includeInstallation ? 'YES' : 'NO'}\n` +
      `- Estimated Budget: ₦${est.grandTotal.toLocaleString()}\n\n` +
      `Please confirm official contractor availability and site inspection schedule.`
    );
    window.open(`https://wa.me/${companyInfo.rawWhatsapp || '2348024271467'}?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="badge-gold" style={{ marginBottom: '14px' }}>
          <Calculator size={14} />
          <span>INSTANT PROJECT ESTIMATOR</span>
        </div>

        <h3 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: 800, marginBottom: '8px' }}>
          Project Scope &amp; Material Calculator
        </h3>
        <p style={{ fontSize: '0.94rem', color: '#475569', marginBottom: '24px', lineHeight: 1.6 }}>
          Estimate your preliminary material requirement and obtain an instant formal inquiry for your site in Lagos or Ogun State.
        </p>

        {/* Category Picker */}
        <div className="form-group">
          <label className="form-label" style={{ color: '#0f172a', fontWeight: 700 }}>Select Service / Material Category</label>
          <select 
            className="form-control"
            value={materialType}
            onChange={(e) => setMaterialType(e.target.value)}
          >
            <option value="interlocking">Interlocking Paving Stones (60mm / 80mm)</option>
            <option value="blocks">Concrete 9-Inch High-Density Blocks</option>
            <option value="aluminum">Aluminium Casement Windows &amp; Glazing</option>
            <option value="granite">Bulk Quarry Granite / Aggregates Supply</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="form-group">
          <label className="form-label" style={{ color: '#0f172a', fontWeight: 700 }}>Estimated Quantity ({est.unitLabel})</label>
          <input 
            type="number"
            min="10"
            max="100000"
            step="10"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* Include Installation */}
        {materialType !== 'granite' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <input 
              type="checkbox" 
              id="includeInstall"
              checked={includeInstallation}
              onChange={(e) => setIncludeInstallation(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
            />
            <label htmlFor="includeInstall" style={{ color: '#1e293b', fontSize: '0.92rem', fontWeight: 600, cursor: 'pointer' }}>
              Include professional site preparation &amp; expert artisan installation
            </label>
          </div>
        )}

        {/* Estimate Output Box - Royal Blue Gradient Card */}
        <div style={{
          background: 'linear-gradient(135deg, #1340b8 0%, #1e3a8a 100%)',
          borderRadius: 'var(--radius-md)',
          padding: '24px 28px',
          marginBottom: '24px',
          color: '#ffffff',
          boxShadow: '0 12px 28px rgba(19, 64, 184, 0.25)'
        }}>
          <div style={{ fontSize: '0.78rem', color: '#bfdbfe', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '6px' }}>
            Estimated Preliminary Budget
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1.15 }}>
            ₦{est.grandTotal.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.84rem', color: '#e0e7ff', marginTop: '6px', lineHeight: 1.5 }}>
            {est.description}
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '12px', 
            marginTop: '16px', 
            paddingTop: '14px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            fontSize: '0.88rem',
            color: '#eff6ff'
          }}>
            <div>Material Cost: <strong style={{ color: '#ffffff' }}>₦{est.materialTotal.toLocaleString()}</strong></div>
            {includeInstallation && <div>Artisan Work: <strong style={{ color: '#ffffff' }}>₦{est.installationTotal.toLocaleString()}</strong></div>}
          </div>
        </div>

        {/* WhatsApp & Call CTAs */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button 
            type="button" 
            className="btn-whatsapp" 
            style={{ 
              flex: 1, 
              justifyContent: 'center',
              background: '#25D366',
              color: '#ffffff',
              padding: '14px 20px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onClick={handleWhatsAppSend}
          >
            <MessageSquare size={18} />
            <span>Send Estimate via WhatsApp</span>
          </button>

          <button 
            type="button" 
            className="btn-secondary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
