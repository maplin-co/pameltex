# 🚀 Render Deployment Guide

## Step-by-Step Deployment to Render

### 📋 Prerequisites

- ✅ GitHub repository: `maplin-co/pameltex`
- ✅ Render account (free tier works!)
- ✅ Supabase database tables created
- ✅ Code committed and pushed to GitHub

---

## 🎯 Part 1: Deploy Backend to Render

### Step 1: Create New Web Service

1. Go to: <https://dashboard.render.com/>
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account if not already connected
4. Select repository: **`maplin-co/pameltex`**

### Step 2: Configure Service Settings

**Basic Settings:**

- **Name:** `pameltex-assistant`
- **Region:** Choose closest to Botswana (e.g., `Frankfurt (EU Central)` or `Singapore`)
- **Branch:** `main`
- **Root Directory:** `pameltex-assistant`
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

**Instance Type:**

- Select **"Free"** (sufficient for testing)
- Can upgrade to paid tier later for better performance

### Step 3: Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these variables:

```
SUPABASE_URL=https://cwxlivyzatiovorlfkyk.supabase.co
```

```
SUPABASE_ANON_KEY=your-supabase-anon-key-from-dashboard
```

```
PORT=3000
```

**Optional (for email notifications):**

```
EMAIL_HOST=smtp.gmail.com
```

```
EMAIL_PORT=587
```

```
EMAIL_USER=your-email@gmail.com
```

```
EMAIL_PASSWORD=your-gmail-app-password
```

```
EMAIL_TO=info@pameltex.com
```

### Step 4: Deploy

1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes)
3. Watch the logs for any errors
4. Once deployed, you'll get a URL like: `https://pameltex-assistant.onrender.com`

### Step 5: Test the Deployment

**Test Health Endpoint:**

```
https://pameltex-assistant.onrender.com/health
```

Should return: `{"status":"healthy","timestamp":"..."}`

**Test Chat Endpoint:**
Use Postman or curl:

```bash
curl -X POST https://pameltex-assistant.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

---

## 🌐 Part 2: Update Frontend

### Option A: Using Environment Variable (Recommended)

1. Create `.env` file in your frontend root:

```
VITE_BACKEND_URL=https://pameltex-assistant.onrender.com
```

1. Add to `.gitignore`:

```
.env
.env.local
```

1. The chatbot will automatically use this URL!

### Option B: Hardcode URL (Quick Test)

Edit `src/components/ChatBot.jsx` line 35:

```javascript
const backendUrl = 'https://pameltex-assistant.onrender.com';
```

---

## ✅ Verification Checklist

### Backend Deployment

- [ ] Service deployed successfully on Render
- [ ] Health endpoint returns 200 OK
- [ ] Chat endpoint responds correctly
- [ ] Environment variables set
- [ ] Logs show no errors

### Frontend Integration

- [ ] Backend URL configured
- [ ] Chatbot connects to backend
- [ ] Messages send and receive correctly
- [ ] Lead form appears when appropriate
- [ ] Lead submission works

### Database

- [ ] Tables created in Supabase
- [ ] Chat logs being saved
- [ ] Leads being captured
- [ ] Can view data in Supabase dashboard

### Email (Optional)

- [ ] Gmail app password configured
- [ ] Test lead sends email
- [ ] Email arrives at <info@pameltex.com>

---

## 🔧 Troubleshooting

### Issue: "Application failed to respond"

**Solution:**

1. Check Render logs for errors
2. Verify `Root Directory` is set to `pameltex-assistant`
3. Ensure `Start Command` is `npm start`
4. Check all environment variables are set

### Issue: "Module not found"

**Solution:**

1. Ensure `Build Command` is `npm install`
2. Check `package.json` exists in `pameltex-assistant/`
3. Redeploy the service

### Issue: "Database connection failed"

**Solution:**

1. Verify `SUPABASE_URL` and `SUPABASE_ANON_KEY` are correct
2. Check Supabase project is active
3. Ensure tables exist (run `database/create_tables.sql`)

### Issue: "CORS errors in frontend"

**Solution:**
The backend already has CORS enabled. If you still get errors:

1. Check the backend URL is correct
2. Ensure you're using HTTPS (not HTTP)
3. Clear browser cache

### Issue: "Render service keeps sleeping"

**Solution:**
Free tier services sleep after 15 minutes of inactivity.

- Upgrade to paid tier ($7/month) for always-on service
- Or accept 30-second cold start delay

---

## 📊 Monitoring

### View Logs

1. Go to Render dashboard
2. Select your service
3. Click "Logs" tab
4. Monitor real-time activity

### View Metrics

- CPU usage
- Memory usage
- Request count
- Response times

### View Leads

1. Go to Supabase dashboard
2. Table Editor → `leads`
3. See all captured leads

---

## 🎨 Custom Domain (Optional)

### Add Your Own Domain

1. In Render dashboard, go to your service
2. Click "Settings" → "Custom Domain"
3. Add your domain (e.g., `api.pameltex.com`)
4. Follow DNS configuration instructions
5. Update frontend `VITE_BACKEND_URL` to your custom domain

---

## 💰 Cost Breakdown

### Free Tier

- ✅ 750 hours/month free
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ⚠️ Service sleeps after 15 min inactivity
- ⚠️ 30-second cold start

### Paid Tier ($7/month)

- ✅ Always-on (no sleeping)
- ✅ No cold starts
- ✅ Better performance
- ✅ More memory/CPU

**Recommendation:** Start with free tier, upgrade when you get traction!

---

## 🔄 Auto-Deploy Setup

Render automatically deploys when you push to GitHub!

**To trigger deployment:**

```bash
git add .
git commit -m "Update chatbot"
git push origin main
```

Render will:

1. Detect the push
2. Pull latest code
3. Run build command
4. Deploy automatically
5. Notify you when complete

---

## 📱 Testing Checklist

### Test Scenarios

1. **Basic Chat:**
   - Send "Hello" → Should greet warmly
   - Send "I need help with anxiety" → Should provide therapy info

2. **Booking:**
   - Send "How do I book?" → Should show booking options
   - Should suggest lead collection

3. **Lead Collection:**
   - Fill out form with test data
   - Submit → Should save to database
   - Check Supabase for new lead
   - Check email (if configured)

4. **Error Handling:**
   - Disconnect internet → Should show friendly error
   - Send empty message → Should not send

---

## ✅ Success Criteria

Your deployment is successful when:

- ✅ Backend URL is accessible
- ✅ Chatbot responds intelligently
- ✅ Leads are captured and saved
- ✅ No errors in Render logs
- ✅ Frontend connects successfully
- ✅ Users can have full conversations

---

## 🎉 You're Live

Once deployed, your chatbot is:

- ✅ Available 24/7 (with cold starts on free tier)
- ✅ Collecting leads automatically
- ✅ Providing instant responses
- ✅ Saving conversation history
- ✅ Ready for production use!

**Next Steps:**

1. Share the website with test users
2. Monitor leads in Supabase
3. Gather feedback
4. Iterate and improve!

---

**Need Help?** Check the logs in Render dashboard or review `README.md` for API documentation.
