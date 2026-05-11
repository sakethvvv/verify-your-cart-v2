const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

/**
 * Logs a scan result to the database for the "Live Scam Radar"
 */
async function logScan(url, result) {
  if (!supabase) {
    console.log('Supabase not configured, skipping log.');
    return;
  }

  try {
    const { error } = await supabase
      .from('scans')
      .insert([
        {
          url: url,
          title: result.title,
          trust_score: result.trust_score,
          verdict: result.final_verdict,
          summary: result.verdict_summary,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;
    console.log('Scan logged to database.');
  } catch (err) {
    console.error('Failed to log scan:', err.message);
  }
}

/**
 * Gets the latest scans for the homepage
 */
async function getRecentScans(limit = 5) {
  if (!supabase) return [];

  try {
    const { data, error } = await supabase
      .from('scans')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Failed to fetch scans:', err.message);
    return [];
  }
}

module.exports = { logScan, getRecentScans };
