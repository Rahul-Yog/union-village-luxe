import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Users, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  interested_in?: string;
  timeline?: string;
  message?: string;
  form_type: string;
  source: string;
  created_at: string;
}

const Dashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchLeads();
  }, [user, navigate]);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching leads:', error);
        toast({
          title: "Error",
          description: "Failed to load leads. Please try again.",
          variant: "destructive",
        });
        return;
      }

      setLeads(data || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFormTypeBadge = (formType: string) => {
    const colors = {
      'lead_form': 'bg-blue-500',
      'floorplans': 'bg-green-500',
      'siteplan': 'bg-purple-500',
      'tour': 'bg-orange-500',
      'general': 'bg-gray-500'
    };
    return colors[formType as keyof typeof colors] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Site
            </Button>
            <div>
              <h1 className="text-3xl font-display font-bold text-primary">
                Leads Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage and track your Union Village leads
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-lg font-semibold">{leads.length} Total Leads</span>
          </div>
        </div>

        {leads.length === 0 ? (
          <Card className="p-12 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">No Leads Yet</h3>
            <p className="text-muted-foreground">
              When visitors submit forms on your site, they'll appear here.
            </p>
          </Card>
        ) : (
          <div className="grid gap-6">
            {leads.map((lead) => (
              <Card key={lead.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {lead.first_name} {lead.last_name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Submitted {formatDate(lead.created_at)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={`${getFormTypeBadge(lead.form_type)} text-white`}>
                      {lead.form_type.replace('_', ' ').toUpperCase()}
                    </Badge>
                    <Badge variant="outline">
                      {lead.source}
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <a 
                      href={`mailto:${lead.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {lead.email}
                    </a>
                  </div>
                  
                  {lead.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-accent" />
                      <a 
                        href={`tel:${lead.phone}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {lead.phone}
                      </a>
                    </div>
                  )}
                  
                  {lead.interested_in && (
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {lead.interested_in.replace('-', ' ')}
                      </span>
                    </div>
                  )}
                  
                  {lead.timeline && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {lead.timeline.replace('-', ' ')}
                      </span>
                    </div>
                  )}
                </div>

                {lead.message && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Message:</p>
                        <p className="text-sm text-muted-foreground">{lead.message}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;