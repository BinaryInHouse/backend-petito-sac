import { Injectable } from '@nestjs/common';
import { PROJECT_TYPES } from '../constants/project-types.constant';
import { QUOTE_ITEMS_BY_PROJECT_TYPE } from '../constants/quote-items.constant';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class QuoteGeneratorService {
  generateQuote(projectCode: string) {
    const projectType = this.getProjectType(projectCode);
    const items = this.generateQuoteItems(projectType);
    
    return {
      id: uuidv4(),
      projectCode,
      projectType,
      status: this.generateRandomProjectStatus(),
      createdAt: new Date().toISOString(),
      items,
      totalAmount: this.calculateTotal(items)
    };
  }

  private getProjectType(projectCode: string): string {
    // Asume que el código del proyecto tiene un prefijo que indica el tipo
    // Ejemplo: WEB-2024-001, MOB-2024-001, etc.
    const prefix = projectCode.split('-')[0].toUpperCase();
    const mappings = {
      'WEB': PROJECT_TYPES.WEB,
      'MOB': PROJECT_TYPES.MOBILE,
      'DSK': PROJECT_TYPES.DESKTOP,
      'ECM': PROJECT_TYPES.ECOMMERCE,
      'CRM': PROJECT_TYPES.CRM
    };
    
    return mappings[prefix] || PROJECT_TYPES.WEB;
  }

  private generateQuoteItems(projectType: string) {
    const baseItems = QUOTE_ITEMS_BY_PROJECT_TYPE[projectType];
    return baseItems.map(item => ({
      id: uuidv4(),
      ...item,
      quantity: this.generateRandomQuantity(),
      unitPrice: this.generateRandomUnitPrice(),
      total: 0, // Se calculará después
      estimatedDuration: this.generateRandomDuration(),
      priority: this.generateRandomPriority()
    })).map(item => ({
      ...item,
      total: item.quantity * item.unitPrice
    }));
  }

  private generateRandomQuantity(): number {
    return Math.floor(Math.random() * (200 - 40) + 40);
  }

  private generateRandomUnitPrice(): number {
    return Math.floor(Math.random() * (15000 - 50) + 500);
  }

  private generateRandomDuration(): string {
    const weeks = Math.floor(Math.random() * (12 - 2) + 2);
    return `${weeks} meses`;
  }

  private generateRandomPriority(): string {
    const priorities = ['HIGH', 'MEDIUM', 'LOW'];
    return priorities[Math.floor(Math.random() * priorities.length)];
  }

  private calculateTotal(items: any[]): number {
    return items.reduce((sum, item) => sum + item.total, 0);
  }
  private generateRandomProjectStatus(): string {
    const status = ['APROBADO', 'VIABLE', 'DESESTIMADO','EN_FORMULACION'];
    return status[Math.floor(Math.random() * status.length)];
  }
}

